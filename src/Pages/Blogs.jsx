import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

const BlogPage = () => {
    const blogPosts = [
        [
        {
            id: 1,
            image: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/13543/5a7aafc5-2a9f-4107-8f77-1a304e8170b6.jpg',
            "title": "Does your child need to gain weight?",
            "category": "Child & Teen Health",
            "summary":'Weight can be a sensitive topic with children and teens, and sometimes a child needs to gain some weight. Checking with your doctor before working on adding weight and emphasizing healthy, high-calorie foods are important.',
            "date": "February 2, 2023",
            "date": "February 9, 2023",
            link: 'https://www.health.harvard.edu/blog/does-your-child-need-to-gain-weight-202302092887'
        },
        {
            id: 2,
            https: '',
            "title": "Optimism, heart health, and longevity: Unraveling the link for Black Americans",
            "category": "Staying Healthy",
            "summary":'Recent findings from the largest and longest-running study of risk factors for cardiovascular disease in Black Americans suggest that a positive outlook can lead to longer life. But while optimism may boost heart health and overall health, the full picture is more complicated.',
            "date": "February 2, 2023",
            "date": "February 14, 2022",
            link: 'https://www.health.harvard.edu/blog/optimism-heart-health-and-longevity-unraveling-the-link-for-black-americans-202202142689'
        },
        {
            id: 3,
            https: '',
            "title": "Late-stage cervical cancer on the rise: What to know",
            "category": "Cancer",
            "summary":'Cervical cancer is curable when caught early through routine screening, so research showing a surprising rise in advanced cancer cases in some groups is worrisome. Two Harvard experts share insights about the research and advice on how people can best protect themselves.',
            "date": "February 2, 2023",
            "date": "February 7, 2023",
            link: 'https://www.health.harvard.edu/blog/late-stage-cervical-cancer-on-the-rise-what-to-know-202302072886'
        },
        {
            id: 4,
            https: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/13519/fe21ef10-617e-4094-8055-0354586b549e.jpg',
            "title": "A mindful way to help manage type 2 diabetes?",
            "category": "Diseases & Conditions",
            "summary":'Lifestyle changes like regular exercise, a healthy diet, and sufficient sleep are cornerstones of self-care for people with type 2 diabetes. But can mind-body practices help people manage or even treat type 2 diabetes? An analysis of multiple studies suggests they might.',
            "date": "February 2, 2023",
            "date": "February 6, 2023",
            link: 'https://www.health.harvard.edu/blog/does-your-child-need-to-gain-weight-202302092887'

        },
        {
            id: 5,
            https: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/12414/2ed8b688-c7f5-49ee-9f9c-e52662c760be.jpg',
            "category": "Heart Health",
            "summary":'A study of Black adults living in the Atlanta area suggests that feeling rooted in community and socializing with neighbors may strongly contribute to better cardiovascular health, which might lower risk for heart attacks and strokes.',
            "date": "February 2, 2023",
            "date": "March 3, 2022",
            link: 'https://www.health.harvard.edu/blog/close-relationships-with-neighbors-influence-cardiovascular-health-in-black-adults-202203032699'
        },
        {
            id: 6,
            https: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/13517/3ad4be90-630a-4ba7-a996-5aa72faed384.jpg',
            "title": "Why play? Early games build bonds and brain",
            "category": "Child & Teen Health",
            "summary":'More than a million nerve connections are made in the brain in the first few years of life. Babies and young children thrive with responsive caregiving, such as engaging a child in playful games that change as they grow.',
            "date": "February 2, 2023",
            link: 'https://www.health.harvard.edu/blog/why-play-early-games-build-bonds-and-brain-202302022884'
        },
        {
            id: 7,
            https: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/12031/e8e80fe7-0a4a-40f2-9163-b773c86e52e4.jpg',
            "title": "5 numbers linked to ideal heart health",
            "category": "Heart Health",
            "summary":'Weight can be a sensitive topic with children and teens, and sometimes a child needs to gain some weight. Checking with your doctor before working on adding weight and emphasizing healthy, high-calorie foods are important.',
            "date": "January 31, 2023",
            link: 'https://www.health.harvard.edu/blog/5-numbers-linked-to-ideal-heart-health-202112162660'
        }
        ]
    ];

    return (
        <Container>
            <h1 className="text-center mb-5">Hospital System Blog</h1>
            <Row>
                {blogPosts.map((blogPost) => (
                    <Col xs="12" sm="6" md="4" key={blogPost.id}>
                        <Card className="mb-4">
                            <CardImg top width="100%" src={blogPost.image} alt={blogPost.title} />
                            <CardBody>
                                <CardTitle tag="h5">{blogPost.title}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">{blogPost.date}</CardSubtitle>
                                <CardText>{blogPost.summary}</CardText>
                                <a href={blogPost.link} className="card-link">Read More</a>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default BlogPage;
