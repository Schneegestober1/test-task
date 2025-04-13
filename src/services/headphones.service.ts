import axios from "axios"
import { IHeadphones } from "../pages/Home/types"

class HeadphonesService {

	URL_FOR_WIRED_HEADPHONES = 'http://localhost:3000/wiredHeadphones'
	URL_FOR_WIREDLESS_HEADPHONES = 'http://localhost:3000/wirelessHeadphones'
	
	async getWiredHeadphones() {
		const {data} = await axios.get<IHeadphones[]>(this.URL_FOR_WIRED_HEADPHONES)
		return data
	}
	async getWiredlessHeadphones() {
		const {data} = await axios.get<IHeadphones[]>(this.URL_FOR_WIREDLESS_HEADPHONES)
		return data
  }
}

export const headphonesService = new HeadphonesService()