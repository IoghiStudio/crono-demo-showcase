import './App.scss';
import { MenuContextProvider } from '../../contextApi/menuContext/store';
import { Header } from '../Header';
import { Menu } from '../Menu';
import { Route, Routes} from 'react-router-dom';
import { Pipelines } from '../Pipelines/Pipelines';
import { useEffect } from 'react';
import { DealsContextProvider, useDealsContext } from '../../contextApi/dealsContext/store';
import { IDealCardData } from '../utils/DealCard';
import { EDealCategory, dealsDataList } from '../../data/dealsData';
import { DealsCategoryContextProvider } from '../../contextApi/dealsCategoryContext/store';

export const App: React.FC = () => (
  <MenuContextProvider>
    <DealsContextProvider>
      <DealsCategoryContextProvider>
        <div className="app">
          <div className="app__header">
            <Header />
          </div>

          <Menu />

          <menu className='app__menu'>
            <Routes> 
              <Route path='/' element={<>Home</>}/>
              <Route path='/find-new' element={<>Find New</>}/>
              <Route path='/lists' element={<>Lists</>}/>
              <Route path='/templates' element={<>Templates</>}/>
              <Route path='/strategies' element={<>Strategies</>}/>
              <Route path='/tasks' element={(<>Tasks</>)}/>
              <Route path='/pipelines' element={<Pipelines/>}/>
            </Routes>
          </menu>
        </div>
      </DealsCategoryContextProvider>
    </DealsContextProvider>
  </MenuContextProvider>
);
