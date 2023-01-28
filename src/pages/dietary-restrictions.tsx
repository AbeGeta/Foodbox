import {useRouter} from 'next/router'
import DietaryRestrictionsList from '../components/DietaryRestrictionsList'

const DietaryRestrictionsPage = () => {
    const router = useRouter();
    return (
        <main>
            <DietaryRestrictionsList />
        </main>
    );
};
export default DietaryRestrictionsPage;