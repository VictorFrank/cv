using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CvBackend.Models
{
    [Table("matches")]
    public class MtgFormData
    {
        [Key]
        public int Id { get; set; }
        public DateTime Created_At { get; set; } = DateTime.UtcNow;

        public string Player1 { get; set; } = string.Empty;
        public string Player2 { get; set; } = string.Empty;
        public string Player3 { get; set; } = string.Empty;
        public string Player4 { get; set; } = string.Empty;
        public string Player5 { get; set; } = string.Empty;
        public string CommanderP1 { get; set; } = string.Empty;
        public string CommanderP2 { get; set; } = string.Empty;
        public string CommanderP3 { get; set; } = string.Empty;
        public string CommanderP4 { get; set; } = string.Empty;
        public string CommanderP5 { get; set; } = string.Empty;
        public string StartingPlayer { get; set; } = string.Empty;
        public string Fb { get; set; } = string.Empty;
        public string FDeath { get; set; } = string.Empty;
        public string Gametime { get; set; } = string.Empty;
        public string Win { get; set; } = string.Empty;
        public string WMethod { get; set; } = string.Empty;
		public string Format { get; set; } = string.Empty;
    }
}