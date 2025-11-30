import SortInfoItem from "../../../../Utils/Home/sort-Info-item"
import { Heart, Layers2, BaggageClaim, FileUser } from 'lucide-react';

function SortInfo() {
  return (
    <section className="flex">
      <SortInfoItem icon={Heart} iconColor={'#5b93ff'} iconBackground={'#eff4ff'} value={'178'} text={'Save Products'} />
      <SortInfoItem icon={Layers2} value={'208'} text={'Stock Products'} iconColor={'#ffc227'} iconBackground={'#fff7e1'} />
      <SortInfoItem icon={BaggageClaim } value={'105'} text={'Sales Products'} iconColor={'#ff8f6b'} iconBackground={'#fff4f0'} />
      <SortInfoItem icon={FileUser } value={'12'} text={'Job application'} iconColor={'#605bff'} iconBackground={'#efefff'}/>
    </section>
  )
}

export default SortInfo
