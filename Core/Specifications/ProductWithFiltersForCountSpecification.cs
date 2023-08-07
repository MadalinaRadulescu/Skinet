using Core.Entities;

namespace Core.Specifications;

public class ProductWithFiltersForCountSpecification :BaseSepcification<Product>
{
    public ProductWithFiltersForCountSpecification(ProductSpecParams productParams)
        : base(x =>
            (!productParams.BrandId.HasValue || x.ProductBrandId == productParams.BrandId) &&
            (!productParams.TypeId.HasValue || x.ProductTypeId == productParams.TypeId)
        )
    {
        
    }
}