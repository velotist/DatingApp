namespace DatingAppAPI.DTOs
{
    public class RegisterDto
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}