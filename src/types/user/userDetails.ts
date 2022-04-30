export default interface UserDetails {
  id?: string;
  passsword?: string;
  name: string;
  email: string;
  type: string;
  phone: string;
  isActive: boolean;
  profileImage: string;
  createdAt: Date;
}
