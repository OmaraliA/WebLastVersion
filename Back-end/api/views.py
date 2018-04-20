from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from api.models import Movie, Comedy, Romance, Thriller, Horror,Comment,Favorites, Register
from api.serializer import Serializer, Serializer_comedy, Serializer_horror, Serializer_romance, Serializer_thriller,Serializer_comment, Serializer_favorites, RegisterSerializer2

@csrf_exempt
def movie_list(request):
  if request.method == "GET":
    movies = Movie.objects.all()
    serialize = Serializer(movies, many=True)
    return JsonResponse(serialize.data, safe=False)
  elif request.method == "POST":
    data = JSONParser().parse(request)
    serialize = Serializer(data=data)
    if serialize.is_valid():
      serialize.save()
      return JsonResponse(serialize.data, status=201)
    return JsonResponse(serialize.errors, status=400)

@csrf_exempt
def romance_list(request):
  if request.method == "GET":
    romances = Romance.objects.all()
    serialize = Serializer_romance(romances, many=True)
    return JsonResponse(serialize.data, safe=False)
  elif request.method == "POST":
    data = JSONParser().parse(request)
    serialize = Serializer_romance(data=data)
    if serialize.is_valid():
      serialize.save()
      return JsonResponse(serialize.data, status=201)
    return JsonResponse(serialize.errors, status=400)

@csrf_exempt
def horror_list(request):
  if request.method == "GET":
    horrors = Horror.objects.all()
    serialize = Serializer_horror(horrors, many=True)
    return JsonResponse(serialize.data, safe=False)
  elif request.method == "POST":
    data = JSONParser().parse(request)
    serialize = Serializer_horror(data=data)
    if serialize.is_valid():
      serialize.save()
      return JsonResponse(serialize.data, status=201)
    return JsonResponse(serialize.errors, status=400)

@csrf_exempt
def thriller_list(request):
  if request.method == "GET":
    thrillers = Thriller.objects.all()
    serialize = Serializer_thriller(thrillers, many=True)
    return JsonResponse(serialize.data, safe=False)
  elif request.method == "POST":
    data = JSONParser().parse(request)
    serialize = Serializer_thriller(data=data)
    if serialize.is_valid():
      serialize.save()
      return JsonResponse(serialize.data, status=201)
    return JsonResponse(serialize.errors, status=400)



@csrf_exempt
def comedy_list(request):
  if request.method == "GET":
    comedies = Comedy.objects.all()
    serialize = Serializer_comedy(comedies, many=True)
    return JsonResponse(serialize.data, safe=False)
  elif request.method == "POST":
    data = JSONParser().parse(request)
    serialize = Serializer_comedy(data=data)
    if serialize.is_valid():
      serialize.save()
      return JsonResponse(serialize.data, status=201)
    return JsonResponse(serialize.errors, status=400)

@csrf_exempt
def comment_list(request):
  if request.method == "GET":
    comments = Comment.objects.all()
    serialize = Serializer_comment(comments, many=True)
    return JsonResponse(serialize.data, safe=False)
  elif request.method == "POST":
    
    data = JSONParser().parse(request)
    serialize = Serializer_comment(data=data)
    if serialize.is_valid():
      serialize.save()
      return JsonResponse(serialize.data, status=201)
    return JsonResponse(serialize.errors, status=400)

@csrf_exempt
def favorite_list(request):
  if request.method == "GET":
    favorites = Favorites.objects.all()
    serialize = Serializer_favorites(favorites, many=True)
    return JsonResponse(serialize.data, safe=False)
  elif request.method == "POST":
    print(request)
    data = JSONParser().parse(request)
    serialize = Serializer_favorites(data=data)
    if serialize.is_valid():
      serialize.save()
      return JsonResponse(serialize.data, status=201)
    return JsonResponse(serialize.errors, status=400)


@csrf_exempt
def movie_detail(request, movie_id):
  
  try:
    movie = Movie.objects.get(pk=movie_id)
  except Exception as e:
    return JsonResponse({"error": str(e)}, status=404)

  if request.method == "GET":
    serialize = Serializer(movie)
    return JsonResponse(serialize.data) 
  elif request.method == "PUT":
    data = JSONParser().parse(request)
    serialize = Serializer(movie, data)
    if serialize.is_valid():
      serialize.save()
      return JsonResponse(serialize.data)
  elif request.method == "DELETE":
    movie.delete()
    serialize = Serializer(movie)
    return JsonResponse(serialize.data)



@csrf_exempt
def comedy_detail(request, comedy_id):
  
  try:
    comedy = Comedy.objects.get(pk=comedy_id)
  except Exception as e:
    return JsonResponse({"error": str(e)}, status=404)

  if request.method == "GET":
    serialize = Serializer_comedy(comedy)
    return JsonResponse(serialize.data) 
  elif request.method == "PUT":
    data = JSONParser().parse(request)
    serialize = Serializer_comedy(comedy, data)
    if serialize.is_valid():
      serialize.save()
      return JsonResponse(serialize.data)
  elif request.method == "DELETE":
    comedy.delete()
    serialize = Serializer_comedy(comedy)
    return JsonResponse(serialize.data)




@csrf_exempt
def romance_detail(request, romance_id):
  
  try:
    romance = Romance.objects.get(pk=romance_id)
  except Exception as e:
    return JsonResponse({"error": str(e)}, status=404)

  if request.method == "GET":
    serialize = Serializer_romance(romance)
    return JsonResponse(serialize.data) 
  elif request.method == "PUT":
    data = JSONParser().parse(request)
    serialize = Serializer_romance(romance, data)
    if serialize.is_valid():
      serialize.save()
      return JsonResponse(serialize.data)
  elif request.method == "DELETE":
    romance.delete()
    serialize = Serializer_romance(romance)
    return JsonResponse(serialize.data)



@csrf_exempt
def thriller_detail(request, thriller_id):
  
  try:
    thriller = Thriller.objects.get(pk=thriller_id)
  except Exception as e:
    return JsonResponse({"error": str(e)}, status=404)

  if request.method == "GET":
    serialize = Serializer_thriller(thriller)
    return JsonResponse(serialize.data) 
  elif request.method == "PUT":
    data = JSONParser().parse(request)
    serialize = Serializer_thriller(thriller, data)
    if serialize.is_valid():
      serialize.save()
      return JsonResponse(serialize.data)
  elif request.method == "DELETE":
    thriller.delete()
    serialize = Serializer_thriller(thriller)
    return JsonResponse(serialize.data)



@csrf_exempt
def horror_detail(request, horror_id):
  
  try:
    horror = Horror.objects.get(pk=horror_id)
  except Exception as e:
    return JsonResponse({"error": str(e)}, status=404)

  if request.method == "GET":
    serialize = Serializer_horror(horror)
    return JsonResponse(serialize.data) 
  elif request.method == "PUT":
    data = JSONParser().parse(request)
    serialize = Serializer_horror(horror, data)
    if serialize.is_valid():
      serialize.save()
      return JsonResponse(serialize.data)
  elif request.method == "DELETE":
    horror.delete()
    serialize = Serializer_horror(horror)
    return JsonResponse(serialize.data)



@csrf_exempt
def favorite_detail(request, favorite_id):
  
  try:
    favorite = Favorite.objects.get(pk=favorite_id)
  except Exception as e:
    return JsonResponse({"error": str(e)}, status=404)

  if request.method == "GET":
    serialize = Serializer_favorite(favorite)
    return JsonResponse(serialize.data) 
  elif request.method == "PUT":
    data = JSONParser().parse(request)
    serialize = Serializer_favorite(favorite, data)
    if serialize.is_valid():
      serialize.save()
      return JsonResponse(serialize.data)
  elif request.method == "DELETE":
    favorite.delete()
    serialize = Serializer_favorite(favorite)
    return JsonResponse(serialize.data)

@csrf_exempt
def register(request):
	if request.method == "GET":
		registers = Register.objects.all()
		ser = RegisterSerializer2(registers, many=True)
		return JsonResponse(ser.data, safe=False)
	elif request.method == "POST":
		print(request)
		data = JSONParser().parse(request)
		ser = RegisterSerializer2(data=data)
		if ser.is_valid():
			ser.save()
			return JsonResponse(ser.data, status=201)
	return JsonResponse(ser.errors, status=400)