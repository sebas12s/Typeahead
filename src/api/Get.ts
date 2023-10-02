

export const Get = async (value: string) => {

  const res = await fetch(`https://typeahead-sebas-api.onrender.com/data/${value}`)
  const data = await res.json()
  const zipCode = data.map((zip: any) => (zip.zip_code.toString()))
  const cityState = data.map((cs: any) => (`${cs.city}, ${cs.state}`))
  return {
    cityState,
    zipCode
  }
}













// const res = await fetch(`https://typeahead-pi.vercel.app/api/findPlace/obtainInfo?searchTerm=new`)
