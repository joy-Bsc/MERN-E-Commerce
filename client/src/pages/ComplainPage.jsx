import React, { useEffect } from 'react';
import FeatureStore from '../store/FeatureStore';
import Layout from '../components/layout/Layout';
import LegalContents from '../components/features/LegalContents';

const ComplainPage = () => {
    const {LegalDetailsRequest} = FeatureStore();

    useEffect(() => {
        (async () => {
            await LegalDetailsRequest("complain");
        })();
    }, []);

    return (
        <Layout>
            <LegalContents />
        </Layout>
    );
};

export default ComplainPage;