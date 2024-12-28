
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBook from './ReadBook';
import WishlistRead from '../wish crud file/WishlistRead';

const ListTabs = () => {



    return (
        <div className=' mt-10'>
        <Tabs>
        <TabList>
        <Tab><p className=' book '>Read Books</p></Tab>
        <Tab><p className=' book '>Wishlist</p></Tab>
        </TabList>
        <TabPanel>
        <ReadBook></ReadBook>
        </TabPanel>
        <TabPanel>
        <WishlistRead></WishlistRead>
        </TabPanel>
        </Tabs>
        </div>
    );
};

export default ListTabs;