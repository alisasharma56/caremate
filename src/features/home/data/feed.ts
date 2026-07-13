export interface Welcome {
    items:       Item[];
    next_cursor: number;
    has_more:    boolean;
}

export interface Item {
    news:      News;
    analytics: Analytics;
    time_ago:  string;
}

export interface Analytics {
    id:               number;
    news_id:          number;
    headline:         string;
    keywords:         string[];
    impactness:       number;
    urgency:          string;
    sentiment:        Sentiment;
    action_required:  boolean;
    action_summary:   string;
    action_deadline:  string;
    target_audience:  string[];
    affected_states:  string[];
    primary_filter:   string[];
    secondary_filter: string[];
    key_element:      KeyElement;
}

export interface KeyElement {
    type:             string;
    description:      string;
    effective_date:   string;
    old_value:        string;
    new_value:        string;
    financial_impact: string;
    geographic_scope: string;
}

export interface Sentiment {
    overall:      string;
    positive_pct: number;
    neutral_pct:  number;
    negative_pct: number;
}

export interface News {
    id:             number;
    title:          string;
    source:         string;
    snippet:        string;
    summary:        string;
    author:         string;
    published_at:   string;
    published_date: string;
    categories:     string[] | null;
    url:            string;
    item_type:      string;
}
