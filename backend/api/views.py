# from django.shortcuts import render
# from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from .serializers import ItemSerializer
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token

# Create your views here.
# def home(request):
#     return render(request, 'home.html',{'name': 'anabil'})

# def add(request):
#     v1 = int(request.GET['num1'])
#     v2 = int(request.GET['num2'])
#     return render(request, 'result.html',{'result': v1+v2})


## get all user data
@api_view(['GET'])
def data(request):
    # print(User.objects.all())
    data = User.objects.all()
    serializer = ItemSerializer(data, many=True)
    return Response(serializer.data)


 ## get a single user data
@api_view(['GET'])
def singleData(request, pk):
    data = User.objects.get(id=pk)
    serializer = ItemSerializer(data, many=False)
    return Response(serializer.data)


## add a new users data
@api_view(['POST'])
def addItem(request):
    serializer = ItemSerializer(data=request.data)
    if serializer.is_valid():
        dets = serializer.save()
    return Response(serializer.data)


## update users data
@api_view(['POST'])
def updateUser(request, pk):
    task = User.objects.get(id=pk)
    serializer = ItemSerializer(instance=task, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


## delete users data
@api_view(['DELETE'])
def deleteUser(request, pk):
    task = User.objects.get(id=pk)
    task.delete()
    return Response("Item deleted")


## authorize and return token & users data
class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'last_login': user.last_login,
            'password': user.password,
            'is_superuser': user.is_superuser,
            'email': user.email,
            'username':user.username,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'is_staff': user.is_staff,
            'is_active': user.is_active,
            'date_joined': user.date_joined,
        })
