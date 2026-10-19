/**
 * Atlas Travel Club — European Hotel Breaks Automated Voucher Engine
 * 
 * Manages the digital pool of Atlas Hotel Break vouchers.
 * Automates assignment, tracking, and delivery for club members.
 */

export interface HotelVoucher {
  code: string;
  status: 'available' | 'assigned' | 'redeemed';
  assignedTo?: string;
  assignedAt?: string;
  expiresAt: string;
  portalUrl: string;
}

// Initial pre-loaded seed pool for Atlas VIP Members
export const INITIAL_HOTEL_VOUCHER_POOL: HotelVoucher[] = [
  {
    code: 'ATLAS-HB-8492-VIP',
    status: 'available',
    expiresAt: '2027-12-31',
    portalUrl: 'https://atlasclub.web.app/hotel-breaks',
  },
  {
    code: 'ATLAS-HB-8493-VIP',
    status: 'available',
    expiresAt: '2027-12-31',
    portalUrl: 'https://atlasclub.web.app/hotel-breaks',
  },
  {
    code: 'ATLAS-HB-8494-VIP',
    status: 'available',
    expiresAt: '2027-12-31',
    portalUrl: 'https://atlasclub.web.app/hotel-breaks',
  },
  {
    code: 'ATLAS-HB-8495-VIP',
    status: 'available',
    expiresAt: '2027-12-31',
    portalUrl: 'https://atlasclub.web.app/hotel-breaks',
  },
  {
    code: 'ATLAS-HB-8496-VIP',
    status: 'available',
    expiresAt: '2027-12-31',
    portalUrl: 'https://atlasclub.web.app/hotel-breaks',
  },
  {
    code: 'ATLAS-HB-8497-VIP',
    status: 'available',
    expiresAt: '2027-12-31',
    portalUrl: 'https://atlasclub.web.app/hotel-breaks',
  },
  {
    code: 'ATLAS-HB-8498-VIP',
    status: 'available',
    expiresAt: '2027-12-31',
    portalUrl: 'https://atlasclub.web.app/hotel-breaks',
  },
  {
    code: 'ATLAS-HB-8499-VIP',
    status: 'available',
    expiresAt: '2027-12-31',
    portalUrl: 'https://atlasclub.web.app/hotel-breaks',
  },
];
