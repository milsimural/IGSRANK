import React from 'react';
import axios from 'axios';
import type { DownloadedData, MessageCollapse, Datum } from '../types/downloadeddata';


export default function AdminPage(): JSX.Element {
    const [downloadedData, setDownloadedData] = React.useState<DownloadedData[]>([]);

    function getDownloadedData() {
        const url = 'https://api.keys.so/tools/domains-batch?base=msk'
        const requestData = {
            data: {
              domains: [
                "senler.ru",
                "sigmasms.ru",
                "smsdar.ru",
                "smspobeda.ru",
                "bandlink.media"
              ]
            },
            params: {
              filter: "string",
              per_page: 25,
              page: 1,
              sort: "string"
            }
          };
          axios.post(url, requestData)
          .then(response => {
            console.log('Resonse', response.data);
          })
          .catch(err => {
            console.error('Error', err);
          })
    }

  return (
    <div>AdminPage

        <h2>Загрузчик данных</h2>



        <h2>Визуализатор данных</h2>
    </div>
  )
}

//getDateWithoutTime()