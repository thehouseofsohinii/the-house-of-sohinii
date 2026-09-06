from django.contrib import admin
from .models import Product, ProductImage


class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("title", "product_code", "category", "price", "featured", "is_published", "created_at")
    list_filter = ("category", "featured", "is_published", "fabric", "occasion")
    search_fields = ("title", "product_code", "fabric", "design", "occasion")
    prepopulated_fields = {"slug": ("title",)}
    inlines = [ProductImageInline]


@admin.register(ProductImage)
class ProductImageAdmin(admin.ModelAdmin):
    list_display = ("product", "alt_text")