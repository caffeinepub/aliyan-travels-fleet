import Time "mo:core/Time";
import Map "mo:core/Map";
import Iter "mo:core/Iter";

actor {
  type Application = {
    name : Text;
    phone : Text;
    address : Text;
    timestamp : Int;
  };

  let applications = Map.empty<Nat, Application>();
  var nextId = 0;

  public shared ({ caller }) func submitApplication(name : Text, phone : Text, address : Text) : async Text {
    let application : Application = {
      name;
      phone;
      address;
      timestamp = Time.now();
    };
    applications.add(nextId, application);
    nextId += 1;
    "Application successful!";
  };

  public query ({ caller }) func getApplications() : async [Application] {
    applications.values().toArray();
  };
};
