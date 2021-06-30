from django.db import models


class Card(models.Model):
    deck = models.ForeignKey
    word = models.CharField(max_length=50)
    definition = models.CharField(max_length=50)


class Deck(models.Model):
    name = models.CharField(max_length=50)
