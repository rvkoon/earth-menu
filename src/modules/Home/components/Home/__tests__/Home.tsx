import { Home, IHomeProps} from '../Home'
import { RenderResult } from '@testing-library/react'
import { render } from '@Tests'

describe("Home component", () => {
    function renderComponent(props: IHomeProps): RenderResult {
    return render(<Home {...props}/>)
    }

    it('should render correctly', () => {
    const { container } = renderComponent({})
    expect(container).toMatchSnapshot()
    })
})