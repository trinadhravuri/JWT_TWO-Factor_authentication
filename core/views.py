from django.shortcuts import render
from .models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import exceptions
from .serializers import UserSerializer
# from django.contrib.auth.models import check_password

# Create your views here.

class RegisterAPIView(APIView):
    def post(self, request):
        data = request.data
        
        if data['password'] != data['confirm_password']:
            raise exceptions.APIException('Password do not match')
        
        serializer = UserSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

        

class LoginAPIView(APIView):
    
    def post(self, request):
        email = request.data['email']
        password = request.data['password']
        
        user =  User.objects.filter(email=email).first()
        
        if user is None:
            raise exceptions.AuthenticationFailed('Please check Email')
        
        if not user.check_password(password):
            raise exceptions.AuthenticationFailed('check Email & Password Credentials')
        
        serializer = UserSerializer(user)
        return Response(serializer.data)