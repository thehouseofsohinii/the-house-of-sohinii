from django.db import models
from django.utils.text import slugify


class Product(models.Model):
    CATEGORY_CHOICES = [
        ("saree", "Saree"),
        ("blouse", "Blouse"),
        ("accessory", "Accessory"),
    ]

    title = models.CharField(max_length=200)
    product_code = models.CharField(max_length=50, unique=True)
    description = models.TextField()
    short_description = models.CharField(max_length=300, blank=True)
    fabric = models.CharField(max_length=100)
    design = models.CharField(max_length=100)
    occasion = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default="saree")
    featured = models.BooleanField(default=False)
    is_published = models.BooleanField(default=False)
    slug = models.SlugField(unique=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(f"{self.title}-{self.product_code}")
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title


class ProductImage(models.Model):
    product = models.ForeignKey(Product, related_name="images", on_delete=models.CASCADE)
    image = models.ImageField(upload_to="product_images/")
    alt_text = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return f"{self.product.title} image"