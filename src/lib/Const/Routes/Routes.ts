const Main__First__Page = '/'
const Discover__World = 'Discover/World'
const Continent__Page = `:continent`
const Country__Page = `${Continent__Page}/:countryName`
const Country__Articles = `${Country__Page}/Articles`
const Country__Particular__Article = `${Country__Articles}/:ArticleName`

export {
    Country__Articles,
    Country__Particular__Article,
    Discover__World,
    Continent__Page,
    Main__First__Page,
    Country__Page
}