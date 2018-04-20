from django.contrib import admin

from api.models import Movie, Comment, Comedy, Romance, Horror, Thriller, Favorites

admin.site.register(Movie)

admin.site.register(Romance)

admin.site.register(Comedy)

admin.site.register(Horror)
admin.site.register(Thriller)

admin.site.register(Comment)
admin.site.register(Favorites)