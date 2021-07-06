# Product-filter

Autre solution de filtre pour l'input : Cas ou on souhaite filtrer selon les premières lettres du mot

    const filtered = products?.filter(({PLU, CM, VA}) => {

      if(!inputValue) return products

      const regex = new RegExp("^" + inputValue, "g");

      return PLU.match(regex) || CM.match(regex) || VA.match(regex)

    }
