import { Moment } from 'moment';

export default interface UserDetails {
  id?: string;
  passsword?: string;
  name: string;
  email: string;
  type: string;
  joiningDate: Moment | null;
  description: string;
  phone: string;
  isActive: boolean;
  profileImage: string;
  createdAt: Date;
  label: string;
}
