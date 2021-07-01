from django.db import models


class Deck(models.Model):
    name = models.CharField(max_length=50)


class Card(models.Model):
    deck = models.ForeignKey(Deck, on_delete=models.CASCADE)
    word = models.CharField(max_length=50)
    definition = models.CharField(max_length=50)
