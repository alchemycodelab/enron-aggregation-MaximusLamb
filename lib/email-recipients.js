module.exports = [
  {
    '$unwind': {
      'path': '$headers.To'
    }
  }, {
    '$project': {
      'Date': {
        '$dateToString': {
          'format': '%Y-%m-%d', 
          'date': '$headers.Date'
        }
      }, 
      'To': '$headers.To'
    }
  }, {
    '$group': {
      '_id': '$To', 
      'count': {
        '$sum': 1
      }
    }
  }, {
    '$sort': {
      'count': -1
    }
  }
];
