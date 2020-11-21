import React from 'react'

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("api/cemetery")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

  render() {
    return (
      <div>
      <ul>
        {this.state.data.map(cemetery => {
          return (
            <li key={cemetery.id}>
              {cemetery.name} - {cemetery.address}
            </li>
          );
        })}
      </ul>
      </div>
    );
  }

  export default Card;
}