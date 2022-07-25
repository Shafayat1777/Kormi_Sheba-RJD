# from dataclasses import field
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        # extra_kwargs = {'password': {'write_only': True, 'required': True}}
    def create(self, validated_data): # for encoding password
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user