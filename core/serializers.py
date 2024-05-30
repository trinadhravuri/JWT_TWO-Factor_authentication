from rest_framework.serializers import ModelSerializer
from .models import User
from rest_framework import exceptions

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def create(self, validated_data):
        password = validated_data.pop('password',None)
        instance = self.Meta.model(**validated_data)
        
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
    
    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise exceptions.ValidationError('Email already exists')
        return value