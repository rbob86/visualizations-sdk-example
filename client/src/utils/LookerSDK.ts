import { Looker40SDK } from '@looker/sdk'
import { DefaultSettings } from '@looker/sdk-rtl'
import PblSession from './PblSession'

const session = new PblSession({
    ...DefaultSettings(),
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    base_url: process.env.REACT_APP_LOOKER_API_URL!,
    token_endpoint: `${process.env.REACT_APP_LOCAL_API_URL}/api/token`,
})

const sdk = new Looker40SDK(session)

export default sdk
