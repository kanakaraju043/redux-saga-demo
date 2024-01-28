import { call, put, takeEvery} from 'redux-saga/effects';
import { getCateSuccess } from './catSlice';


function* fetchCats() {
    console.log('fetchCats')
    try {
        const cats = yield call( () => fetch('https://api.thecatapi.com/v1/breeds'));
        const formattedCats = yield cats.json();
        // const topCats = formattedCats.slice(0, 10)
        yield put(getCateSuccess(formattedCats))
        
    } catch (error) {
        console.log(error)

    }
   
}

function* catSaga() {
    console.log('catSaga error')
    yield takeEvery('cats/getCatsFetch', fetchCats)
}

export default catSaga;