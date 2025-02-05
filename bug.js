```javascript
//Incorrect aggregation pipeline causing unexpected results
aggregate([
  {$match: { /* ... */ }},
  {$lookup: {
    from: 'collectionB',
    localField: 'fieldA',
    foreignField: 'fieldB',
    as: 'results' 
  }},
  {$unwind: '$results'},
  {$group: {_id: '$fieldC', total: {$sum: '$results.fieldD'}}},
]);
```