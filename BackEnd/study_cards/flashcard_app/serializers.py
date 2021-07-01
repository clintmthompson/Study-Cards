from rest_framework import serializers
from .models import Card
from .models import Deck


class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ['id', 'deck', 'word', 'definition']


class DeckSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deck
        fields = ['id', 'name']
