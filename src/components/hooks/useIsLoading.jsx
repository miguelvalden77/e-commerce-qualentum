import { useSelector } from "react-redux"


export const useIsLoading = () => {

    const { loading } = useSelector(state => state.product)

    return { loading }

}