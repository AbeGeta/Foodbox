import {useRouter} from 'next/router'
import FlavorPreferencesList from '../components/FlavourPreferencesList'

const FlavorPreferencesPage = () => {
    const router = useRouter();
    return (
        <main>
            <FlavorPreferencesList />
        </main>
    );
};
export default FlavorPreferencesPage;