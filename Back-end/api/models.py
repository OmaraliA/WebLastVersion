from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    image = models.ImageField(blank=True,null=True)
    text = models.TextField(default="dfd")
   # image = models.ImageField(upload_to='images/',
    #                          height_field='height', width_field='width',
     #                         max_length=255)
    def __str__(self):
        return self.title


class Comedy(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    image = models.ImageField(blank=True,null=True)
   # image = models.ImageField(upload_to='images/',
    #                          height_field='height', width_field='width',
     #                         max_length=255)
    def __str__(self):
        return self.title

class Romance(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    image = models.ImageField(blank=True,null=True)
   # image = models.ImageField(upload_to='images/',
    #                          height_field='height', width_field='width',
     #                         max_length=255)
    def __str__(self):
        return self.title


class Thriller(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    image = models.ImageField(blank=True,null=True)
   # image = models.ImageField(upload_to='images/',
    #                          height_field='height', width_field='width',
     #                         max_length=255)
    def __str__(self):
        return self.title


class Horror(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    image = models.ImageField(blank=True,null=True)
   # image = models.ImageField(upload_to='images/',
    #                          height_field='height', width_field='width',
     #                         max_length=255)
    def __str__(self):
        return self.title


class Comment(models.Model):
    text = models.TextField()
    movie_id = models.ForeignKey(Movie, blank=True, null=True, on_delete=models.DO_NOTHING)
   # movie_title = models.CharField(max_length=100)
   # image = models.ImageField(upload_to='images/',
    #                          height_field='height', width_field='width',
     #                         max_length=255)
    def __str__(self):
        return self.text

class Favorites(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    #image = models.ImageField(blank=True,null=True)
   # image = models.ImageField(upload_to='images/',
    #                          height_field='height', width_field='width',
     #                         max_length=255)
    def __str__(self):
        return self.title

class Register(models.Model):
	email = models.CharField(max_length = 20, blank = False)
	password = models.CharField(max_length = 20, blank = False)

	def returnEmail(self):
		return self.email