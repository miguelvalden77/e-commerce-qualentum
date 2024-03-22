

export const verifyProducts = (arr, product) => {

    arr.forEach(({ id, count }) => {
        if (product.id == id) {
            count += 1
        }
    })
}
