/**
 * Google Analytics 4 (GA4) Tracking Utility
 * Safely handles dataLayer and gtag events across all browser environments.
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GA_MEASUREMENT_ID) ||
  'G-NASTUDIO2026';

/**
 * Send a generic event to Google Analytics
 */
export function trackGAEvent(eventName: string, params: Record<string, any> = {}) {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, {
        ...params,
        send_to: GA_MEASUREMENT_ID,
      });
    }
  } catch (error) {
    // Non-blocking fail-safe
  }
}

/**
 * Track WhatsApp Conversion Click (Key Lead Event)
 */
export function trackWhatsAppClick(locationSource: string, detail?: string) {
  trackGAEvent('click_whatsapp', {
    event_category: 'Conversion',
    event_label: detail || 'General Consultation',
    location_source: locationSource,
    value: 1,
  });

  // Also trigger Google Ads / GA4 standard 'generate_lead'
  trackGAEvent('generate_lead', {
    method: 'whatsapp',
    location: locationSource,
    lead_content: detail || 'Konsultasi Website',
  });
}

/**
 * Track Cost Calculator Interaction
 */
export function trackCalculatePrice(websiteType: string, estimatedTotal: number) {
  trackGAEvent('calculate_price', {
    event_category: 'Engagement',
    website_type: websiteType,
    estimated_price_idr: estimatedTotal,
  });
}

/**
 * Track Pricing Plan Selection
 */
export function trackSelectPricingPlan(planName: string, price: string) {
  trackGAEvent('select_pricing_plan', {
    event_category: 'Ecommerce',
    item_name: planName,
    price_tag: price,
  });
}

/**
 * Track Portfolio Demo & Simulator Usage
 */
export function trackViewDemo(projectTitle: string) {
  trackGAEvent('view_portfolio_demo', {
    event_category: 'Portfolio',
    project_title: projectTitle,
  });
}
