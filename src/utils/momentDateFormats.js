import moment from 'moment'
import {
  FULL_DATE
} from './constants'

export const fullDate = datetime => {
  return moment.parseZone(datetime).format(FULL_DATE)
}

