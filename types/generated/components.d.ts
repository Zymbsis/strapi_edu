import type { Struct, Schema } from '@strapi/strapi';

export interface TestTest extends Struct.ComponentSchema {
  collectionName: 'components_test_tests';
  info: {
    displayName: 'test';
  };
  attributes: {
    test1: Schema.Attribute.String;
    test2: Schema.Attribute.Text;
    test3: Schema.Attribute.Decimal;
  };
}

export interface ReviewsReviews extends Struct.ComponentSchema {
  collectionName: 'components_reviews_reviews';
  info: {
    displayName: 'reviews';
    description: '';
  };
  attributes: {
    reviewer: Schema.Attribute.String;
    rating: Schema.Attribute.Decimal;
    comment: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'test.test': TestTest;
      'reviews.reviews': ReviewsReviews;
    }
  }
}
