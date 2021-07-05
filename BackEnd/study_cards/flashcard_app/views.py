from django.shortcuts import render
from .models import Card
from .models import Deck
from .serializers import CardSerializer
from .serializers import DeckSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404


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


class CardDetail(APIView):

    def get_card(self, pk):
        try:
            return Card.objects.get(pk=pk)
        except Card.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        card = self.get_card(pk)
        serializer = CardSerializer(card)
        return Response(serializer.data)

    def put(self, request, pk):
        card = self.get_card(pk)
        serializer = CardSerializer(card, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        card = self.get_card(pk)
        card.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


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


class DeckDetail(APIView):
    def get_deck(self, pk):
        try:
            return Deck.objects.get(pk=pk)
        except Deck.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        deck = self.get_deck(pk)
        serializer = DeckSerializer(deck)
        return Response(serializer.data)

    def put(self, request, pk):
        deck = self.get_deck(pk)
        serializer = DeckSerializer(deck, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        deck = self.get_deck(pk)
        deck.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    class DeckContents(APIView):
        def get_deck(self, pk):
            try:
                return Deck.objects.get(pk=pk)
            except Deck.DoesNotExist:
                raise Http404

        def detail(self, request, pk):
            deck = self.get_deck(pk)
            return render(request, 'core/detail.html', {'deck': deck, 'card': Card.objects.filter(pk=pk)})

