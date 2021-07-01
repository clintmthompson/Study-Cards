from django.shortcuts import render
from .models import Card
from .models import Deck
from .serializers import CardSerializer
from .serializers import DeckSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from json import JSONEncoder


class CardList(APIView):

    def get(self, request):
        card = Card.objects.all()
        serializer = CardSerializer(card, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CardSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DeckList(APIView):

    def get(self, request):
        deck = Deck.objects.all()
        serializer = DeckSerializer(deck, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = DeckSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

