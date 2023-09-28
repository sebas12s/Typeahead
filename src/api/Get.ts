

export const Get = async (value: string) => {

  const res = await fetch(`https://typeahead-pi.vercel.app/api/findPlace/obtainInfo?searchTerm=${value}`)
  const { matchedStates } = await res.json()
  const cityState = matchedStates.map((cs: any) => (`${cs.name}, ${cs.abbreviation}`))
  return {
    cityState
  }
}













// const res = await fetch(`https://typeahead-pi.vercel.app/api/findPlace/obtainInfo?searchTerm=new`)
// const zipCode = data.record.map((zip: any) => (zip.zip_code.toString()))
// const cityState = data.record.map((cs: any) => (`${cs.city}, ${cs.state}`))