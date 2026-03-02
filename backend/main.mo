import List "mo:core/List";
import Time "mo:core/Time";

actor {
  type Inquiry = {
    name : Text;
    phone : Text;
    city : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let inquiries = List.empty<Inquiry>();

  public shared ({ caller }) func submitInquiry(name : Text, phone : Text, city : Text, message : Text) : async () {
    let inquiry : Inquiry = {
      name;
      phone;
      city;
      message;
      timestamp = Time.now();
    };
    inquiries.add(inquiry);
  };

  public query ({ caller }) func getInquiries() : async [Inquiry] {
    inquiries.toArray();
  };
};
