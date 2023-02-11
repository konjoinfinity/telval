function telephoneCheck(str) {
    const reg = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/
    if(str.match(reg)){
      if(str.length == 8 || str.length == 7) {
        console.log('invalid')
        return false
      } else {
        console.log('valid')
          return true
      }
    } else {
      return false
    }
    }
    
    telephoneCheck("555-555-5555");