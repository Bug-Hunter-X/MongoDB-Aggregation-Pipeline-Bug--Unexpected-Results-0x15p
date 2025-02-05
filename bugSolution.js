```javascript
//Corrected aggregation pipeline
aggregate([
  {$match: { /* ... */ }},
  {$lookup: {
    from: 'collectionB',
    localField: 'fieldA',
    foreignField: 'fieldB',
    as: 'results' 
  }},
  {$unwind: '$results'},
  {$group: {_id: '$fieldC', total: {$sum: '$results.fieldD'}}},  // Corrected grouping
  {$project: {_id: 1, total: 1}} //Added projection to ensure only required fields are output
]);
```