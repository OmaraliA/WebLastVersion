from rest_framework import serializers
from api.models import Movie, Comedy, Thriller, Romance, Horror, Comment, Favorites, Register

class Serializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(required=True)
    description = serializers.CharField(required=True)
    image = serializers.ImageField(required=True)
    comment = serializers.CharField(read_only=True)


    def create(self, validated_data):
        return Movie.objects.create(**validated_data)
  
    def update(self, instance, validated_data ):
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.image = validated_data.get('image', instance.description)
    
        instance.save()
        return instance

class Serializer_comedy(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(required=True)
    description = serializers.CharField(required=True)
    image = serializers.ImageField(required=True)

    def create(self, validated_data):
        return Movie.objects.create(**validated_data)
  
    def update(self, instance, validated_data ):
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.image = validated_data.get('image', instance.description)
        instance.save()
        return instance

class Serializer_thriller(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(required=True)
    description = serializers.CharField(required=True)
    image = serializers.ImageField(required=True)

    def create(self, validated_data):
        return Movie.objects.create(**validated_data)
  
    def update(self, instance, validated_data ):
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.image = validated_data.get('image', instance.description)
        instance.save()
        return instance


class Serializer_romance(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(required=True)
    description = serializers.CharField(required=True)
    image = serializers.ImageField(required=True)

    def create(self, validated_data):
        return Movie.objects.create(**validated_data)
  
    def update(self, instance, validated_data ):
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.image = validated_data.get('image', instance.description)
        instance.save()
        return instance

class Serializer_horror(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(required=True)
    description = serializers.CharField(required=True)
    image = serializers.ImageField(required=True)

    def create(self, validated_data):
        return Movie.objects.create(**validated_data)
  
    def update(self, instance, validated_data ):
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.image = validated_data.get('image', instance.description)
        instance.save()
        return instance

class Serializer_comment(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    text = serializers.CharField(required=True)
    movie_id = serializers.IntegerField(required=True)
   
    def create(self, validated_data):
        return Movie.objects.create(**validated_data)
  
    def update(self, instance, validated_data ):
        instance.text = validated_data.get('title', instance.text)
        instance.movie_id = validated_data.get('movie_id', instance.movie_id)

        instance.save()
        return instance

class Serializer_favorites(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(required=True)
    description = serializers.CharField(required=True)
    #image = serializers.ImageField(required=True)

    def create(self, validated_data):
        return Movie.objects.create(**validated_data)
  
    def update(self, instance, validated_data ):
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        #instance.image = validated_data.get('image', instance.image)
        instance.save()
        return instance

class RegisterSerializer(serializers.Serializer):
  id = serializers.IntegerField(read_only=True)
  email = serializers.CharField(required=True)
  password = serializers.CharField(required=True)

  def create(self, validated_data):
    return Register.objects.create(**validated_data)
  
  def update(self, instance, validated_data ):
    instance.email = validated_data.get('email', instance.email)
    instance.save()
    return instance

class RegisterSerializer2(serializers.ModelSerializer):
  
  class Meta:
    model = Register
    fields = "__all__"
    # fields = ('id', 'title', 'created_at')

class Serializer(serializers.ModelSerializer):
  
    class Meta:
        model = Movie
        fields = "__all__"
        #fields = ('id', 'title', 'description')

class Serializer_comedy(serializers.ModelSerializer):
    class Meta:
        model = Comedy
        fields = "__all__"
       # fields = ('id', 'title', 'description')

class Serializer_romance(serializers.ModelSerializer):   
    class Meta:
        model = Romance
        fields = "__all__"
        #fields = ('id', 'title', 'description')

class Serializer_thriller(serializers.ModelSerializer):
    class Meta:
        model = Thriller
        fields = "__all__"
        #fields = ('id', 'title', 'description')

class Serializer_horror (serializers.ModelSerializer):
    class Meta:
        model = Horror
        fields = "__all__"
        #fields = ('id', 'title', 'description')
  
class Serializer_comment (serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = "__all__"

  
class Serializer_favorites(serializers.ModelSerializer):
    class Meta:
        model = Favorites
        fields = "__all__"
      