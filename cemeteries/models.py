from django.db import models

class Cemetery(models.Model):

	#choices
	CONSERVATION_CEMETERY = 'Conservation cemetery'
	NATURAL_CEMETERY = 'Natural cemetery'
	HYBRID_CEMETERY = 'Hybrid cemetery'
	CEMETERY_TYPE_CHOICES = [
		(CONSERVATION_CEMETERY, 'Conservation cemetery'),
		(NATURAL_CEMETERY, 'Natural cemetery'),
		(HYBRID_CEMETERY, 'Hybrid cemetery'),
	]

	# database fields
	name = models.CharField(max_length=100)
	address = models.CharField(max_length=100)
	city = models.CharField(max_length=50)
	state = models.CharField(max_length=50)
	cemetery_type = models.CharField(
		max_length=21, 
		choices=CEMETERY_TYPE_CHOICES,
		default=CONSERVATION_CEMETERY,
    )