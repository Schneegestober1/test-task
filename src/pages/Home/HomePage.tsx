import './Home.css'
import Card from '../../components/Card/Card'
import { headphonesService } from '../../services/headphones.service'
import { useQuery } from '@tanstack/react-query'

function HomePage() {
  const { data: wiredHeadphones, isLoading: isWiredLoading, isError: isWiredError, error: wiredError } = useQuery({
    queryKey: ['wiredHeadphones list'],
    queryFn: () => headphonesService.getWiredHeadphones()
  });

  const { data: wirelessHeadphones, isLoading: isWirelessLoading, isError: isWirelessError, error: wirelessError} = useQuery({
    queryKey: ['wirelessHeadphones list'],
    queryFn: () => headphonesService.getWiredlessHeadphones()
  });

  return (
    <div className='wrapper'>
      <div className='container'>
        <div className="content">
          <main className='main'>

            <section className='section'>
              <h2>Проводные наушники</h2>
              <div className="grid">
                {isWiredLoading && <p style={{color: 'blue'}}>Загрузка...</p>}
                {isWiredError && <p style={{color: 'red'}}>Ошибка загрузки: {wiredError.message}</p>}
                {wiredHeadphones?.map((item) => (
                  <Card key={item.id} {...item} />
                ))}
              </div>
            </section>

            <section className='section'>
              <h2>Беспроводные наушники</h2>
              <div className="grid">
                {isWirelessLoading && <p style={{color: 'blue'}}>Загрузка...</p>}
                {isWirelessError && <p style={{color: 'red'}}>Ошибка загрузки: {wirelessError.message}</p>}
                {wirelessHeadphones?.map((item) => (
                  <Card key={item.id} {...item} />
                ))}
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  )
}

export default HomePage

