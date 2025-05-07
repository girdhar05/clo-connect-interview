import { Data } from "../interface/data";

export function applyFilters(tempProducts: Data[]): Data[] {
  let params = new URLSearchParams(window.location.search);
  let result: Data[] = [...tempProducts]; // Create a copy to avoid mutations
  
  // Apply keyword filter
  if(params.has('keyword')) {
    const keyword = params.get('keyword');
    const searchTerm = keyword?.toLowerCase() || '';
    if (searchTerm !== '') {
      result = result.filter(item => 
        item.title.toLowerCase().includes(searchTerm) || 
        item.creator.toLowerCase().includes(searchTerm)
      );
    }
  }

  // Apply pricing filter (AND operation on already filtered results)
  if(params.has('filter')) {
    const filter = params.get('filter');
    const filterValue = filter?.toString() || '';
    if (filterValue !== '') {
      const filterOptions = filterValue.split(',');
      result = result.filter(item => 
        filterOptions.includes(item.pricingOption.toString())
      );
    }
  }
  
  // Apply price range filter - ensure it's applied to all products
  if(params.has('minPrice') && params.has('maxPrice')) {
    const minPrice = Number(params.get('minPrice'));
    const maxPrice = Number(params.get('maxPrice'));
    
    // Only apply price filter if it's a valid range
    if (!isNaN(minPrice) && !isNaN(maxPrice)) {
      console.log(`Filtering by price range: $${minPrice} - $${maxPrice}`);
      
      result = result.filter(item => {
        // Convert item price to a number to ensure proper comparison
        const itemPrice = Number(item.price);
        
        // Debug log for troubleshooting
        console.log(`Item: ${item.title}, Price: $${itemPrice}, In range: ${itemPrice >= minPrice && itemPrice <= maxPrice}`);
        
        return itemPrice >= minPrice && itemPrice <= maxPrice;
      });
    }
  }

  return result;
}